import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { RepositoryModule } from './repository/repository.module';

@Module({
  imports: [UserModule, CategoryModule, ProductModule, RepositoryModule],
})
export class AppModule {}
