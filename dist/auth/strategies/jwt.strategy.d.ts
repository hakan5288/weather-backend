import { ConfigService } from '@nestjs/config';
import { AuthService } from '../auth.service';
declare const JwtStrategy_base: new (...args: any) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private authService;
    constructor(configService: ConfigService, authService: AuthService);
    validate(payload: any): Promise<{
        id: string;
        name: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
}
export {};
