import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from '../entities/Movie.entity';

@Injectable()
export class MovieRepository {
  constructor(
    @InjectRepository(Movie)
    private repository: Repository<Movie>,
  ) {}

  async create(movie: Partial<Movie>): Promise<Movie> {
    const newMovie = this.repository.create(movie);
    return this.repository.save(newMovie);
  }
  
  async find(query: Partial<Movie>): Promise<Movie[]> {
    return this.repository.find({
      where: query
    });
  }

  async listAll(): Promise<Movie[]> {
    return this.repository.find();
  }

}
