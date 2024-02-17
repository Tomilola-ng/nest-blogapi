import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix("api");

  const config = new DocumentBuilder()
    .setTitle("NestJS Blog API")
    .setDescription(
      "A robust NestJS Blog API, with models such as: posts, comments and even users. \t Created by Tomilola Oluwafemi"
    )
    .setVersion("0.1")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(3000);
}
bootstrap();
