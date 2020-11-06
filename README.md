# fs5-recomendador-frontend
Recomendador de películas - frontend


## Team
- Melissa Dávila ([@Meldavmar](https://github.com/Meldavmar))
- José Alberto Pérez ([@japmelian](https://github.com/japmelian))
- Alejandro Suárez ([@Aletf7](https://github.com/Aletf7))

## Dataset
In this project we are using a subset of [The Movies Database](https://www.kaggle.com/rounakbanik/the-movies-dataset) created by [Rounak Banik](https://github.com/rounakbanik)) and posted in [Kaggle](https://www.kaggle.com). This dataset contains metadata from 45.000 movies released on or before July 2017.

As the original datasets is about 1Gb of data, we decided to preprocess this raw data in order to work with the information that we want to work with. Because of that we randomly selected 10.000 movies with a subset of the attributes of the main dataset. The data is stored in the `dataset` folder of this repo in `JSON` format.

Here is one example of a movie:

```
{"genres": [{"id": 18, "name": "Drama"}], "id": 265226, "imdb_id": "tt3044244", "original_language": "it", "original_title": "Le meraviglie", "overview": "Gelsomina\u2019s family works according to some special rules. First of all, Gelsomina, at twelve years of age, is head of the family and her three younger sisters must obey her: sleep when she tells them to and work under her watchful eye. But the world, the outside, mustn\u2019t know anything about their rules, and must be kept away from them. They must learn to disguise themselves.", "release_date": "2014-5-22", "runtime": 110.0, "title": "The Wonders", "production_companies": [{"name": "Rai Cinema", "id": 2683}, {"name": "Tempesta Films", "id": 4384}], "production_countries": [{"iso_3166_1": "DE", "name": "Germany"}, {"iso_3166_1": "IT", "name": "Italy"}, {"iso_3166_1": "CH", "name": "Switzerland"}]}
```

In the following table there is the description and type of each movie attribute.

| Attribute |   Type  |        Description        |
|:---------|:-------:|:-------------------------|
| `id`        | `Integer` | Movie ID in [The Movie DB](https://www.themoviedb.org/)  |
| `imdb_id`  |  `String` | Movie ID in [IMDb](https://www.imdb.com/)          |
|`original_title`|`String`| Original movie title|
|`title`|`String`| Original movie title (in English)|
|`runtime`|`Float`| Runtime of the movie|
|`release_date`|`String`|Release date of the movie|
|`overview`|`String`|Overview of the moviie|
|`genres`|`JSON` list|List of the genres where the movie is classified. Each item contains an `id` (`Integer`) and a `name` (`String`) for each genre|
|`production_companies`|`JSON` list| Production companies involved in the movie. Each item contains an `id` (`Integer`) and a `name` (`String`) for each production company|
|`production_countries`|`JSON` list| Countries where the movie has been produced. Each item contains an `iso_3166_1` (`Integer`) code for the country and a `name` (`String`) for the countrie's name|

## Mockups
The mockups of our platform are stored under the `mockups` folder of this repo. There are variants for the [mobile](./mockups/mockupPhone) & [desktop](./mockups/mockupDesktop) versions

## Database schema
This is the first version of our relational database schema.

![Database schema](./db-info/scjema/db-schema.png)