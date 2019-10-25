export class ProductoModel {

    constructor(
        public id: string,
        public title: string,
        public category: string,
        public sub_category: string,
        public description: string,
        public image?: Image,
        public slug?: string,
        public timestamp?: string
    ) {}
}


class Image {
    public portada: string;
    public img1?: string;
    public img2?: string;
    public img3?: string;
    public img4?: string;
    public img5?: string;
}
