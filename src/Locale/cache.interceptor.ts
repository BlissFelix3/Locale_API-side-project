// /* Redis Caching */
// import {
//   Injectable,
//   NestInterceptor,
//   ExecutionContext,
//   CallHandler,
// } from '@nestjs/common';
// import { Observable, of } from 'rxjs';
// import { tap } from 'rxjs/operators';
// import { RedisService } from 'nestjs-redis';

// @Injectable()
// export class CacheInterceptor implements NestInterceptor {
//   constructor(private readonly cacheService: RedisService) {}

//   async intercept(
//     context: ExecutionContext,
//     next: CallHandler,
//   ): Promise<Observable<any>> {
//     const client = this.cacheService.getClient()
//     const key = context.getArgs().join(':')

//     const cachedValue = await client.get(key)

//     if(cachedValue) {
//       return of(JSON.parse(cachedValue))
//     }

//     return next.handle().pipe(
//       tap((response) => client.set(key, JSON.stringify(response), 'EX', 5 * 60)) // Cache is 5 mins
//     )
//   }
// }
