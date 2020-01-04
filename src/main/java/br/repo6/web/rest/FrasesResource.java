package br.repo6.web.rest;

import br.repo6.domain.Frases;
import br.repo6.repository.FrasesRepository;
import br.repo6.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional; 
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link br.repo6.domain.Frases}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class FrasesResource {

    private final Logger log = LoggerFactory.getLogger(FrasesResource.class);

    private static final String ENTITY_NAME = "frases";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final FrasesRepository frasesRepository;

    public FrasesResource(FrasesRepository frasesRepository) {
        this.frasesRepository = frasesRepository;
    }

    /**
     * {@code POST  /frases} : Create a new frases.
     *
     * @param frases the frases to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new frases, or with status {@code 400 (Bad Request)} if the frases has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/frases")
    public ResponseEntity<Frases> createFrases(@RequestBody Frases frases) throws URISyntaxException {
        log.debug("REST request to save Frases : {}", frases);
        if (frases.getId() != null) {
            throw new BadRequestAlertException("A new frases cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Frases result = frasesRepository.save(frases);
        return ResponseEntity.created(new URI("/api/frases/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /frases} : Updates an existing frases.
     *
     * @param frases the frases to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated frases,
     * or with status {@code 400 (Bad Request)} if the frases is not valid,
     * or with status {@code 500 (Internal Server Error)} if the frases couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/frases")
    public ResponseEntity<Frases> updateFrases(@RequestBody Frases frases) throws URISyntaxException {
        log.debug("REST request to update Frases : {}", frases);
        if (frases.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Frases result = frasesRepository.save(frases);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, frases.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /frases} : get all the frases.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of frases in body.
     */
    @GetMapping("/frases")
    public List<Frases> getAllFrases() {
        log.debug("REST request to get all Frases");
        return frasesRepository.findAll();
    }

    /**
     * {@code GET  /frases/:id} : get the "id" frases.
     *
     * @param id the id of the frases to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the frases, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/frases/{id}")
    public ResponseEntity<Frases> getFrases(@PathVariable Long id) {
        log.debug("REST request to get Frases : {}", id);
        Optional<Frases> frases = frasesRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(frases);
    }

    /**
     * {@code DELETE  /frases/:id} : delete the "id" frases.
     *
     * @param id the id of the frases to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/frases/{id}")
    public ResponseEntity<Void> deleteFrases(@PathVariable Long id) {
        log.debug("REST request to delete Frases : {}", id);
        frasesRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
