import { IsString, IsNumber, IsMongoId, IsOptional, IsArray } from 'class-validator';

export class CreateStateDto {
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
  readonly capital: string;

  @IsString()
  @IsOptional()
  readonly slogan: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly senatorialDistricts: string[];

  @IsString()
  @IsOptional()
  readonly dialect: string;

  @IsString()
  @IsOptional()
  readonly map: string;

  @IsString()
  @IsOptional()
  readonly website: string;

  @IsString()
  @IsOptional()
  readonly createdDate: string;

  @IsString()
  @IsOptional()
  readonly createdBy: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly pastGovernors: string[];

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly borders: string[];

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly knownFor: string[];

  @IsMongoId()
  readonly region: string;
}
