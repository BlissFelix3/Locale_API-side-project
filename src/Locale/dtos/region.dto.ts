import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateRegionDto {
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
  readonly geoPoliticalZone: string;
  
  @IsString()
  @IsOptional()
  readonly website: string;
}
