class MyItem {
  private id: Number;
  title: String;
  imageUrl: String;

  constructor(id: Number, title: String, imageUrl: String) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
  }

  public getId(): Number {
    return this.id;
  }
  public getTitle(): String {
    return this.title;
  }
  public getImageUrl(): String {
    return this.imageUrl;
  }
}

export default MyItem;
