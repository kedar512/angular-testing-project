import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe("Calculator service", () => {
    let calculatorService: CalculatorService,
            loggerSpy: any;

    beforeEach( () => {
        loggerSpy = jasmine.createSpyObj("LoggerService", ["log"]);

        TestBed.configureTestingModule({
            providers: [
                CalculatorService,
                { provide: LoggerService, useValue: loggerSpy}
            ]
        });

        calculatorService = TestBed.inject(CalculatorService);
    });

    it("should add two numbers", () => {
        const result = calculatorService.add(2, 2);
        expect(result).toBe(4);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });
});