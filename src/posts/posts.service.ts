import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { DatabaseService } from "src/database/database.service";

@Injectable()
export class PostsService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createPostDto: Prisma.PostCreateInput) {
    return this.databaseService.post.create({
      data: createPostDto,
    });
  }

  findAll() {
    return this.databaseService.post.findMany({ where: { published: true } });
  }

  findOne(id: number) {
    return this.databaseService.post.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updatePostDto: Prisma.PostUpdateInput) {
    return this.databaseService.post.update({
      where: {
        id,
      },
      data: updatePostDto,
    });
  }

  remove(id: number) {
    return this.databaseService.post.delete({
      where: {
        id,
      },
    });
  }
}
