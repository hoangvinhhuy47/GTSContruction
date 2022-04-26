export interface ILand {
  ssBannerIntroduce?: string[];
  ssServices?: {
    title: string;
    service: IService[];
  };
  ssBannerText?: {
    image: string;
    title: string;
    desc: string;
    titleButton: string;
    linkTo: string;
  };
  ssGallery?: {
    title: string;
    galleries: IGallery[];
    titleButton?: string;
    linkTo?: string;
  };
  ssCounter?: {
    count: ICount[];
  };
  ssAchievement?: {
    achieves: IAchieve[];
  };
  ssClients?: ?{
    clients: IClient[];
  };
}
interface IClient {
  companyName: string;
  logo: string;
  feedback: string;
}
interface IAchieve {
  name: string;
  desc: string;
  createAt: Date;
}
interface IService {
  id: number;
  icon: string;
  name: string;
  desc: string;
}
interface ICount {
  icon: string;
  name: string;
  amount: number;
}
interface IGallery {
  id: number;
  name: string;
  smallImage: string;
  mediumImage: string;
  thumbnail: string;
  linkTo: string;
}
