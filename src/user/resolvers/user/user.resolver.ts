import { Resolver, Mutation, Args, Query } from "@nestjs/graphql";
import { UserEntity } from "src/user/entities/user.entity";
import { CreateUserInput } from "src/user/inputs/create-users.input";
import { UpdateUserInput } from "src/user/inputs/update-user.input";
import { UserService } from "src/user/services/user/user.service";

@Resolver("User")
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserEntity)
  async createUser(
    @Args("createUser") createUserInput: CreateUserInput,
  ): Promise<UserEntity> {
    return await this.userService.createUser(createUserInput);
  }

  @Mutation(() => UserEntity)
  async updateUser(
    @Args("updateUser") updateUserInput: UpdateUserInput,
  ): Promise<UserEntity> {
    return await this.userService.updateUser(updateUserInput);
  }

  @Mutation(() => Number)
  async removeUser(@Args("id") id: number): Promise<number> {
    return await this.userService.removeUser(id);
  }

  @Query(() => UserEntity)
  async getOneUser(@Args("id") id: number): Promise<UserEntity> {
    return await this.userService.getOneUser(id);
  }

  @Query(() => [UserEntity])
  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userService.getAllUsers();
  }
}
