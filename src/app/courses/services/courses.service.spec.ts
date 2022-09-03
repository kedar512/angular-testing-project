import { TestBed, waitForAsync } from "@angular/core/testing";
import { CoursesService } from "./courses.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { Observable } from "rxjs";
import { COURSES } from "../../../../server/db-data";

describe("CoursesService", () => {
    let coursesService: CoursesService,
            httpTestingController: HttpTestingController;
    beforeEach( () => {

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                CoursesService
            ]
        });

        coursesService = TestBed.inject(CoursesService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it("should retrieve all courses", () => {

        // const res = await fetch('/api/courses', {
        //     method: 'GET',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //   })
        // const data = await res.json();
        // expect(data.payload.length).toBe(12);
        const allCourse = coursesService.findAllCourses();

        allCourse
            .subscribe( courses => {
            expect(courses.length).toBe(12);

            const angularTestingCourse = courses.filter( course => course.id == 12);
            const angularTestingCourseName = angularTestingCourse[0].titles.description;
            expect(angularTestingCourseName).toEqual("Angular Testing Course");
        });

        const req = httpTestingController.expectOne("/api/courses");
        expect(req.request.method).toEqual("GET");
        req.flush({ payload: Object.values(COURSES)});
        //expect(angularTestingCourseName).toEqual("Angular Testing Course");
    });
});