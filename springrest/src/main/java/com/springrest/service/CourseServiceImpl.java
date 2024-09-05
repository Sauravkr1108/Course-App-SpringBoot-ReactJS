package com.springrest.service;

import com.springrest.model.Course;
import com.springrest.repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    CourseRepo courseRepo;

    @Override
    public List<Course> getCourses() {
        return courseRepo.findAll();
    }

    @Override
    public Course getCourse(Long id) {
        return courseRepo.getCourseById(id);
    }

    @Override
    public Course addCourse(Course course) {
        return courseRepo.save(course);
    }

    @Override
    public Course updateCourse(Course course) {
        Course updateCourse = courseRepo.getCourseById(course.getId());
        updateCourse.setTitle(course.getTitle());
        updateCourse.setDescription(course.getDescription());
        courseRepo.save(updateCourse);
        return updateCourse;
    }

    @Override
    public Boolean deleteCourse(int id) {
        if(courseRepo.findById(id).isPresent()){
            courseRepo.deleteById(id);
            return true;
        } else
            return false;
    }

    @Override
    public Course CourseById(Long id) {
        return courseRepo.getCourseById(id);
    }
}
