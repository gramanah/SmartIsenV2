package com.smartisenproject.service;

import com.smartisenproject.domain.School;
import java.util.List;

/**
 * Service Interface for managing School.
 */
public interface SchoolService {

    /**
     * Save a school.
     *
     * @param school the entity to save
     * @return the persisted entity
     */
    School save(School school);

    /**
     * Get all the schools.
     *
     * @return the list of entities
     */
    List<School> findAll();

    /**
     * Get the "id" school.
     *
     * @param id the id of the entity
     * @return the entity
     */
    School findOne(Long id);

    /**
     * Delete the "id" school.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
