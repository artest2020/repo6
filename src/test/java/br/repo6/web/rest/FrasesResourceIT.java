package br.repo6.web.rest;

import br.repo6.Repo6App;
import br.repo6.domain.Frases;
import br.repo6.repository.FrasesRepository;
import br.repo6.web.rest.errors.ExceptionTranslator;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Validator;

import javax.persistence.EntityManager;
import java.util.List;

import static br.repo6.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import br.repo6.domain.enumeration.TipoVF;
/**
 * Integration tests for the {@link FrasesResource} REST controller.
 */
@SpringBootTest(classes = Repo6App.class)
public class FrasesResourceIT {

    private static final String DEFAULT_DESCRICAO = "AAAAAAAAAA";
    private static final String UPDATED_DESCRICAO = "BBBBBBBBBB";

    private static final TipoVF DEFAULT_VERDADEIRA = TipoVF.V;
    private static final TipoVF UPDATED_VERDADEIRA = TipoVF.F;

    @Autowired
    private FrasesRepository frasesRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    @Autowired
    private Validator validator;

    private MockMvc restFrasesMockMvc;

    private Frases frases;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final FrasesResource frasesResource = new FrasesResource(frasesRepository);
        this.restFrasesMockMvc = MockMvcBuilders.standaloneSetup(frasesResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter)
            .setValidator(validator).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Frases createEntity(EntityManager em) {
        Frases frases = new Frases()
            .descricao(DEFAULT_DESCRICAO)
            .verdadeira(DEFAULT_VERDADEIRA);
        return frases;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Frases createUpdatedEntity(EntityManager em) {
        Frases frases = new Frases()
            .descricao(UPDATED_DESCRICAO)
            .verdadeira(UPDATED_VERDADEIRA);
        return frases;
    }

    @BeforeEach
    public void initTest() {
        frases = createEntity(em);
    }

    @Test
    @Transactional
    public void createFrases() throws Exception {
        int databaseSizeBeforeCreate = frasesRepository.findAll().size();

        // Create the Frases
        restFrasesMockMvc.perform(post("/api/frases")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(frases)))
            .andExpect(status().isCreated());

        // Validate the Frases in the database
        List<Frases> frasesList = frasesRepository.findAll();
        assertThat(frasesList).hasSize(databaseSizeBeforeCreate + 1);
        Frases testFrases = frasesList.get(frasesList.size() - 1);
        assertThat(testFrases.getDescricao()).isEqualTo(DEFAULT_DESCRICAO);
        assertThat(testFrases.getVerdadeira()).isEqualTo(DEFAULT_VERDADEIRA);
    }

    @Test
    @Transactional
    public void createFrasesWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = frasesRepository.findAll().size();

        // Create the Frases with an existing ID
        frases.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restFrasesMockMvc.perform(post("/api/frases")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(frases)))
            .andExpect(status().isBadRequest());

        // Validate the Frases in the database
        List<Frases> frasesList = frasesRepository.findAll();
        assertThat(frasesList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllFrases() throws Exception {
        // Initialize the database
        frasesRepository.saveAndFlush(frases);

        // Get all the frasesList
        restFrasesMockMvc.perform(get("/api/frases?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(frases.getId().intValue())))
            .andExpect(jsonPath("$.[*].descricao").value(hasItem(DEFAULT_DESCRICAO)))
            .andExpect(jsonPath("$.[*].verdadeira").value(hasItem(DEFAULT_VERDADEIRA.toString())));
    }
    
    @Test
    @Transactional
    public void getFrases() throws Exception {
        // Initialize the database
        frasesRepository.saveAndFlush(frases);

        // Get the frases
        restFrasesMockMvc.perform(get("/api/frases/{id}", frases.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(frases.getId().intValue()))
            .andExpect(jsonPath("$.descricao").value(DEFAULT_DESCRICAO))
            .andExpect(jsonPath("$.verdadeira").value(DEFAULT_VERDADEIRA.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingFrases() throws Exception {
        // Get the frases
        restFrasesMockMvc.perform(get("/api/frases/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateFrases() throws Exception {
        // Initialize the database
        frasesRepository.saveAndFlush(frases);

        int databaseSizeBeforeUpdate = frasesRepository.findAll().size();

        // Update the frases
        Frases updatedFrases = frasesRepository.findById(frases.getId()).get();
        // Disconnect from session so that the updates on updatedFrases are not directly saved in db
        em.detach(updatedFrases);
        updatedFrases
            .descricao(UPDATED_DESCRICAO)
            .verdadeira(UPDATED_VERDADEIRA);

        restFrasesMockMvc.perform(put("/api/frases")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedFrases)))
            .andExpect(status().isOk());

        // Validate the Frases in the database
        List<Frases> frasesList = frasesRepository.findAll();
        assertThat(frasesList).hasSize(databaseSizeBeforeUpdate);
        Frases testFrases = frasesList.get(frasesList.size() - 1);
        assertThat(testFrases.getDescricao()).isEqualTo(UPDATED_DESCRICAO);
        assertThat(testFrases.getVerdadeira()).isEqualTo(UPDATED_VERDADEIRA);
    }

    @Test
    @Transactional
    public void updateNonExistingFrases() throws Exception {
        int databaseSizeBeforeUpdate = frasesRepository.findAll().size();

        // Create the Frases

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restFrasesMockMvc.perform(put("/api/frases")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(frases)))
            .andExpect(status().isBadRequest());

        // Validate the Frases in the database
        List<Frases> frasesList = frasesRepository.findAll();
        assertThat(frasesList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteFrases() throws Exception {
        // Initialize the database
        frasesRepository.saveAndFlush(frases);

        int databaseSizeBeforeDelete = frasesRepository.findAll().size();

        // Delete the frases
        restFrasesMockMvc.perform(delete("/api/frases/{id}", frases.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Frases> frasesList = frasesRepository.findAll();
        assertThat(frasesList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
