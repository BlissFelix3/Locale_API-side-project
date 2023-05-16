import { IsString, IsNumber, IsMongoId, IsOptional } from 'class-validator';

export class CreateLGADto {
  @IsString()
  readonly name: string;

  @IsNumber()
  @IsOptional()
  readonly population: number;

  @IsNumber()
  @IsOptional()
  readonly landmass: number;

  @IsString()
  @IsOptional()
  readonly latitude: string;

  @IsString()
  @IsOptional()
  readonly longitude: string;

  @IsString()
  @IsOptional()
  readonly website: string;

  @IsMongoId()
  readonly state: string;
}
