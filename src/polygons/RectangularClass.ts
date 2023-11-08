import { Polygon } from "./PolygonClass";
import { Point } from "../base/PointClass";

/**
 * Фигура парямоугольник.
 */
export class Rectangular extends Polygon {
  /**
   * Конструктор для создания прямоугольника.
   * @param points
   * Массив Points, содержащий все координаты прямоугольника.
   */
  constructor(points: Point[]) {
    if (points.length != 4) throw new Error("It is not a rectangular, wrong points ammount");
    if (points[0].distanceCalc(points[2]) != points[1].distanceCalc(points[3]))
      throw new Error("It is not a rectangular");
    super(points);
  }

  /**
   * Статическая функция для создания круга только через диаметр.
   * @param width
   * Ширина прямоугольника.
   * @param height
   * Высота прямоугольника.
   * @remarks
   * Центр прямоугольника будет установлен в точке (0,0).
   */
  static fromValues(width: number, height: number) {
    if (width <= 0 || height <= 0)
      throw new Error("Sides of rectangular can not be negative or zero");
    return new Rectangular([
      new Point(0 - width / 2, 0 - height / 2),
      new Point(0 + width / 2, 0 - height / 2),
      new Point(0 + width / 2, 0 + height / 2),
      new Point(0 - width / 2, 0 + height / 2),
    ]);
  }

  /**
   * Возвращает высоту прямоугольника
   */
  public get height() {
    const a = this.points[0].distanceCalc(this.points[1]);
    const b = this.points[1].distanceCalc(this.points[2]);
    if (a < b) return a;
    return b;
  }

  /**
   * Возвращает ширину прямоугольника
   */
  public get width() {
    const a = this.points[0].distanceCalc(this.points[1]);
    const b = this.points[1].distanceCalc(this.points[2]);
    if (a > b) return a;
    return b;
  }

  /**
   * Возвращает Point, координаты центра прямоугольника
   */
  public get center() {
    let minx = this.points[0].xCoordinate,
      maxx = this.points[0].xCoordinate,
      miny = this.points[0].yCoordinate,
      maxy = this.points[0].yCoordinate;
    this.points.forEach((point) => {
      if (point.xCoordinate > maxx) maxx = point.xCoordinate;
      else if (point.xCoordinate < minx) minx = point.xCoordinate;
      if (point.yCoordinate > maxy) maxy = point.yCoordinate;
      else if (point.yCoordinate < miny) miny = point.yCoordinate;
    });
    return new Point((maxx - minx) / 2 + minx, (maxy - miny) / 2 + miny);
  }

  override toString(): string {
    return `RECTANGULAR ` + super.toString();
  }
}
