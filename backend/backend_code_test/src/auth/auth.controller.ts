import { Body, Controller, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Tokens } from './types';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('/auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('/signup')
    @HttpCode(HttpStatus.CREATED)
    signUp(@Body() dto: AuthDto): Promise<Tokens> {
        return this.authService.signUp(dto)
    }

    @Post('/signin')
    @HttpCode(HttpStatus.OK)
    signIn(@Body() dto: AuthDto): Promise<Tokens> {
        return this.authService.signIn(dto)
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('/logout')
    @HttpCode(HttpStatus.CREATED)
    logOut(@Req() req: Request) {
        const user = req.user as { userId: number }

        return this.authService.logOut(user?.userId);
    }

    @UseGuards(AuthGuard('jwt-refresh'))
    @Post('/refresh')
    refreshToken(@Req() req: Request) {
        const user = req.user as { userId: number, refreshToken: string }
        return this.authService.refreshToken(user.userId, user.refreshToken);

    }
}
