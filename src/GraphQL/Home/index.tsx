import { gql } from "@apollo/client";

export const ANIME_TRENDINGS_EMISSION = gql `
query getListAnimeTrendingEmissions ($page: Int){
  Page(page: $page, perPage: 8) {
      pageInfo {
        total perPage currentPage lastPage hasNextPage
        }
  media(type: ANIME, status: RELEASING sort: [TRENDING_DESC, POPULARITY_DESC]) {
    id
      title{
        romaji
        english
        native
      }
      type
      status
      coverImage{
        large
        medium
        color
        extraLarge
      }
      bannerImage
      meanScore
  }
  }
}`;

export const ANIME_POPULARY = gql `
query getANIME_POPULARY ($page: Int){
  Page(page: $page, perPage: 8) {
      pageInfo {
        total perPage currentPage lastPage hasNextPage
        }
  media(type: ANIME, popularity_greater:80,averageScore:80,isAdult:false,sort: [TRENDING_DESC, POPULARITY_DESC]) {
    id
      title{
        romaji
        english
        native
      }
      type
      status
      coverImage{
        large
        medium
        color
        extraLarge
      }
      bannerImage
      meanScore
  }
  }
}`;

export const LAST_REALEASE = gql `
query getLAST_REALEASE ($page: Int, $season: MediaSeason,$seasonYear: Int){
  Page(page: $page, perPage: 8) {
      pageInfo {
        total perPage currentPage lastPage hasNextPage
        }
  media(type: ANIME,format:TV status:RELEASING,isAdult:false,season:$season,seasonYear:$seasonYear, sort: [UPDATED_AT]) {
    id
      title{
        romaji
        english
        native
      }
      type
      status
      episodes
      updatedAt
      nextAiringEpisode{
        airingAt
        episode
      }
      coverImage{
        large
        medium
        color
        extraLarge
      }
      bannerImage
      meanScore
  }
  }
}`;


export const GET_ANIME_BY_ID = gql `
query get_ANIME_BY_ID ($id: Int){
  Media(type: ANIME,format:TV status:RELEASING,isAdult:false, id: $id) {
    id
      title{
        romaji
        english
        native
      }
      type
      status
      episodes
      updatedAt
      nextAiringEpisode{
        airingAt
        episode
      }
      coverImage{
        large
        medium
        color
        extraLarge
      }
      bannerImage
      meanScore
  }
}`;

/* export const ANIME_TRENDINGS_EMISSION = gql `
query getListAnimeTrendingEmissions ($page: Int){
  Page(page: $page, perPage: 12) {
      pageInfo {
        total perPage currentPage lastPage hasNextPage
        }
  media(type: ANIME, status: RELEASING sort: [TRENDING_DESC, POPULARITY_DESC]) {
    id
      title{
        romaji
        english
        native
      }
      type
      format
      status
      description(asHtml:false)
      startDate{
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      season
      episodes
      source
      hashtag
      trailer{
        id
        site
        thumbnail
      }
      coverImage{
        large
        medium
        color
        extraLarge
      }
      bannerImage
      popularity
      meanScore
      genres
  }
  }
}`; */