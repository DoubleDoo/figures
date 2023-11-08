import { Point } from "../base/PointClass";
import { Figure } from "../base/FigureInterface";

/**
 * Фигура круг.
 */
export class Circle implements Figure {
  /**
   * Конструктор для создания круга.
   * @param center
   * Point, центр круга.
   * @param radius
   * Радиус круга.
   */
  constructor(center: Point, radius: number) {
    if (radius <= 0)
      throw new Error("Radius of circle can not be negative or zero");
    this.center = center;
    this.radius = radius;
  }

  /**
   * Статическая функция для создания круга только через радиус.
   * @param radius
   * Радиус круга.
   * @remarks
   * Центр круга будет установлен в точке (0,0).
   */
  static fromRadius(radius: number) {
    return new Circle(new Point(0, 0), radius);
  }

  /**
   * Статическая функция для создания круга только через диаметр.
   * @param diameter
   * Диаметр круга.
   * @remarks
   * Центр круга будет установлен в точке (0,0).
   */
  static fromDiameter(diameter: number) {
    return new Circle(new Point(0, 0), diameter / 2);
  }

  /**
   * Центр круга
   */
  public center: Point;

  /**
   * Радиус круга
   */
  public radius: number;

  /**
   * Возвращает диаметр круга
   */
  public get diameter() {
    return this.radius * 2;
  }

  public async perimetrCalc(): Promise<number> {
    return 2 * Math.PI * this.radius;
  }

  public async areaCalc(): Promise<number> {
    return Math.PI * Math.pow(this.radius, 2);
  }

  public toString(): string {
    return `CIRCLE with \nCenter: ${this.center.toString()} \nRadius: ${
      this.radius
    }\n Diameter: ${this.diameter}`;
  }
}
