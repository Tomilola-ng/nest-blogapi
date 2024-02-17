import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CommentsService } from "./comments.service";
import { Prisma } from "@prisma/client";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Comments")
@Controller("comments")
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(@Body() createCommentDto: Prisma.CommentCreateInput) {
    return this.commentsService.create(createCommentDto);
  }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.commentsService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCommentDto: Prisma.CommentUpdateInput
  ) {
    return this.commentsService.update(+id, updateCommentDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.commentsService.remove(+id);
  }
}
