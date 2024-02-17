import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { DatabaseService } from "src/database/database.service";

@Injectable()
export class CommentsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createCommentDto: Prisma.CommentCreateInput) {
    return this.databaseService.comment.create({
      data: createCommentDto,
    });
  }

  findAll() {
    return this.databaseService.comment.findMany();
  }

  findOne(id: number) {
    return this.databaseService.comment.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateCommentDto: Prisma.CommentUpdateInput) {
    return this.databaseService.comment.update({
      where: {
        id,
      },
      data: updateCommentDto,
    });
  }

  remove(id: number) {
    return this.databaseService.comment.delete({
      where: {
        id,
      },
    });
  }
}
