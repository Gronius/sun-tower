
«Карта поверхів працює. Тепер реалізуємо інтерактивні квартири на SVG-плані.»

 HANDOFF.md/текс
1. поточною структурою src/data;
2. роллю apartments.ts, floor-plans.ts, floor-schemes.ts, floors.ts, types.ts;
3. поточним зв'язком BuildingMap → floor:selected → floors.ts → floor-schemes.ts → SVG;
4. що FloorSelector уже прибрали;
5. що BuildingMap та hover/tooltip працюють;
6. що тестовано 5 поверхів A і 5 поверхів B;
7. наступний етап — інтерактивні квартири на плані поверху;
8. твої правила щодо free / reserved / sold;
9. і головне — не ламати вже працюючу логіку, а розвивати її поетапно.