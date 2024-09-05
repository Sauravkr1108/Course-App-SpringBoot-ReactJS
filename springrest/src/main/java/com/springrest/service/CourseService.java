package com.springrest.service;

import com.springrest.model.Course;

import java.util.List;

public interface CourseService {

    List<Course> getCourses();

    Course getCourse(Long id);

    Course addCourse(Course course);

    Course updateCourse(Course course);

    Boolean deleteCourse(int id);

    Course CourseById(Long id);
}
