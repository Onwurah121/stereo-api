export enum MediaType {
    ImageFile = 'image',
    AudioFile = 'audio'
  }

export interface Media {
    id : number;
    mediaType: MediaType ;
    name: string ;
    description: string;
}