/**
 * Точка с x, y координатами.
 */
export class Point {
  /**
   * Конструктор для создания точки.
   * @param xCoordinate
   * Декартова координата x.
   * @param yCoordinate
   * Декартова координата y.
   */
  constructor(public xCoordinate: number, public yCoordinate: number) {}

  /**
   * Возращает расстояние до указанной точки
   * @param secondPoint
   * Точка, для расчета расстояния.
   */
  distanceCalc(secondPoint: Point): number {
    return Math.sqrt(
      Math.pow(secondPoint.xCoordinate - this.xCoordinate, 2) +
        Math.pow(secondPoint.yCoordinate - this.yCoordinate, 2)
    );
  }

  /**
   * Возвращает строковое предстваление точки.
   */
  toString(): string {
    return `(${this.xCoordinate}, ${this.yCoordinate})`;
  }
}
