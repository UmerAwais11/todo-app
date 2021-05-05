import { v4 as uuidV4 } from "uuid";

class BaseEntity {
  static generateId(): string {
    return uuidV4();
  }
}

export default BaseEntity;
