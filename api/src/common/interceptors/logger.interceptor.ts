import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { tap } from "rxjs";
import { Observable } from "rxjs/internal/Observable";

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> |
   Promise<Observable<any>> {
    
    const request = context.switchToHttp().getRequest();
    const method = request.method;
    const url = request.url;
    const now = Date.now();

    console.log(`[REQUEST] ${method} ${url} - ${now} Inicio da requisição`);   

    return next.handle().pipe(
        tap( () => {
            console.log(`[RESPONSE] ${method} ${url} - ${Date.now() - now}ms Fim da requisição`);
        })
    );
  }
}