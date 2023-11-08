import { Point } from "../base/PointClass";
import { Figure } from "../base/FigureInterface";

/**
 * Фигура многоугольник.
 */
export class Polygon implements Figure {
  /**
   * Конструктор для создания многоугольника.
   * @param points
   * Массив Points, содержащий все координаты многоугольника.
   */
  constructor(points: Point[]) {
    if (points.length < 2) throw new Error("It is not a polygon");
    this.points = points;
  }

  /**
   * Точки многоугольника
   */
  public points: Point[];

  /**
   * Возвращает колличество Point многоугольника
   */
  public get pointsCount() {
    return this.points.length;
  }

  public async perimetrCalc(): Promise<number> {
    let lastPoint = this.points[this.points.length - 1];
    let perimeter = 0;
    this.points.forEach((point) => {
      perimeter += lastPoint.distanceCalc(point);
      lastPoint = point;
    });
    return perimeter;
  }

  public async areaCalc(): Promise<number> {
    let area = 0;
    let last = this.points.length - 1;
    for (let i = 0; i < this.points.length; i++) {
      area +=
        this.points[last].xCoordinate * this.points[i].yCoordinate -
        this.points[last].yCoordinate * this.points[i].xCoordinate;
      last = i;
    }
    return 0.5 * Math.abs(area);
  }

  public toString(): string {
    return `POLYGON with points: \n${this.points
      .map((point) => {
        return point.toString();
      })
      .join("\n")}`;
  }
}
