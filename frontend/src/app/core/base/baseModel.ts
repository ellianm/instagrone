
export abstract class BaseModel {
    id: number;
    static getRoute(): string {
        throw new Error('Implementar método getRoute na Entidade')
    }
}