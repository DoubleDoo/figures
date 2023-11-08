import { Polygon } from "./PolygonClass";
import { Point } from "../base/PointClass";

/**
 * Фигура треугольник.
 */
export class Triangle extends Polygon {
  /**
   * Конструктор для создания прямоугольника.
   * @param points
   * Массив Points, содержащий все координаты прямоугольника.
   */
  constructor(points: Point[]) {
    if (points.length != 3) throw new Error("It is not a triangle, wrong points ammount");
    if (
      (points[2].xCoordinate - points[0].xCoordinate) /
        (points[1].xCoordinate - points[0].xCoordinate) ==
      (points[2].yCoordinate - points[0].yCoordinate) /
        (points[1].yCoordinate - points[0].yCoordinate)
    )
      throw new Error("It is not a triangle");
    super(points);
  }

  /**
   * Возвращает координаты центра треугольника (пересечения медиан)
   */
  public get center() {
    return new Point(
      (this.points[0].xCoordinate +
        this.points[1].xCoordinate +
        this.points[2].xCoordinate) /
        3,
      (this.points[0].yCoordinate +
        this.points[1].yCoordinate +
        this.points[2].yCoordinate) /
        3
    );
  }

  override toString(): string {
    return `TRIANGLE ` + super.toString();
  }
}
