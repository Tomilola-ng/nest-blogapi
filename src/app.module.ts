import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PostsModule } from "./posts/posts.module";
import { DatabaseModule } from "./database/database.module";
import { UsersModule } from "./users/users.module";
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [PostsModule, DatabaseModule, UsersModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
