import { ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';
export declare class ValidationFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
