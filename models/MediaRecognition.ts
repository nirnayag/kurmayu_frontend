
export class MediaRecognition {
    _id?: string;
    title: string;
    description: string;
    personName: string;
    source: string;
    publishedDate: string;
    thumbnail: string;
    mediaType: string;
    isActive: boolean;

    constructor(
        title: string,
        description: string,
        personName: string,
        source: string,
        publishedDate: string,
        thumbnail: string,
        mediaType: string,
        isActive: boolean,
        _id?: string
    ) {
        this.title = title;
        this.description = description;
        this.personName = personName;
        this.source = source;
        this.publishedDate = publishedDate;
        this.thumbnail = thumbnail;
        this.mediaType = mediaType;
        this.isActive = isActive;
        this._id = _id;
    }

    static fromJson(json: any): MediaRecognition {
        return new MediaRecognition(
            json.title,
            json.description || '',
            json.personName || '',
            json.source,
            json.publishedDate,
            json.thumbnail,
            json.mediaType || '',
            json.isActive ?? true,
            json._id
        );
    }

    toJson(): any {
        return {
            _id: this._id,
            title: this.title,
            description: this.description,
            personName: this.personName,
            source: this.source,
            publishedDate: this.publishedDate,
            thumbnail: this.thumbnail,
            mediaType: this.mediaType,
            isActive: this.isActive
        };
    }
}
