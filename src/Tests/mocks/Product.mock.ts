// /product
import { Product } from "../../Interfaces/Product";
export const allProduct_Response: Product[] = [
  {
    product_name: "O Gigante Flamejante",
    product_description:
      "Hambúrguer robusto com queijo derretido, cebolas caramelizadas e molho picante.",
    product_category: "Hambúrgueres",
    product_value: 18.5,
    product_image: "images/O Gigante Flamejante.jpg",
    product_image_alt: "Imagem de O Gigante Flamejante",
    product_addons: [
      {
        addon_name: "Folhas de Élfico",
        addon_description: "Alface fresca colhida nas terras dos elfos.",
        addon_value: 1.5,
        addon_weight: "20g",
        addon_image: "images/elfish_leaves.png",
        addon_image_alt: "Imagem de Folhas de Élfico",
      },
      {
        addon_name: "Anéis de Cebola Anã",
        addon_description:
          "Cebolas crocantes fritas, tradicionais das cavernas anãs.",
        addon_value: 2.0,
        addon_weight: "25g",
        addon_image: "images/dwarven_onion_rings.png",
        addon_image_alt: "Imagem de Anéis de Cebola Anã",
      },
      {
        addon_name: "Molho do Mago Mestre",
        addon_description:
          "Um molho encantado que confere um toque mágico ao hambúrguer.",
        addon_value: 2.3,
        addon_weight: "20g",
        addon_image: "images/mastermage_sauce.png",
        addon_image_alt: "Imagem de Molho do Mago Mestre",
      },
    ],
  },
  {
    product_name: "O Lorde das Trevas",
    product_description:
      "Hambúrguer sombrio com queijo cheddar, bacon defumado e cebolas caramelizadas.",
    product_category: "Hambúrgueres",
    product_value: 20.0,
    product_image: "images/DarkLord.jpg",
    product_image_alt: "Imagem de O Lorde das Trevas",
    product_addons: [
      {
        addon_name: "Asas de Morcego",
        addon_description:
          "Asas de frango preparadas com temperos das terras sombrias.",
        addon_value: 3.0,
        addon_weight: "30g",
        addon_image: "images/bat_wings.png",
        addon_image_alt: "Imagem de Asas de Morcego",
      },
      {
        addon_name: "Queijo Sombrio",
        addon_description: "Um queijo envelhecido nas cavernas mais profundas.",
        addon_value: 2.5,
        addon_weight: "25g",
        addon_image: "images/dark_cheese.png",
        addon_image_alt: "Imagem de Queijo Sombrio",
      },
      {
        addon_name: "Molho da Noite Eterna",
        addon_description: "Um molho denso que evoca a escuridão eterna.",
        addon_value: 2.8,
        addon_weight: "20g",
        addon_image: "images/eternal_night_sauce.png",
        addon_image_alt: "Imagem de Molho da Noite Eterna",
      },
    ],
  },
  {
    product_name: "Druida Delicioso",
    product_description:
      "Hambúrguer vegetariano com abacate, cogumelos e molho de ervas.",
    product_category: "Hambúrgueres",
    product_value: 17.8,
    product_image: "images/Druida.jpg",
    product_image_alt: "Imagem de Druida Delicioso",
    product_addons: [
      {
        addon_name: "Raízes da Terra",
        addon_description: "Raízes nutritivas para uma experiência terrestre.",
        addon_value: 2.5,
        addon_weight: "20g",
        addon_image: "images/earth_roots.png",
        addon_image_alt: "Imagem de Raízes da Terra",
      },
      {
        addon_name: "Neblina Mística",
        addon_description: "Neblina encantada para um sabor mágico.",
        addon_value: 2.3,
        addon_weight: "18g",
        addon_image: "images/mystical_mist.png",
        addon_image_alt: "Imagem de Neblina Mística",
      },
      // Adicione mais addons se desejar
    ],
  },
  {
    product_name: "Bárbaro Braseiro",
    product_description:
      "Hambúrguer rústico com carne de javali, queijo defumado e pimenta orc.",
    product_category: "Hambúrgueres",
    product_value: 19.0,
    product_image: "images/barbarian_grill.jpg",
    product_image_alt: "Imagem de Bárbaro Braseiro",
    product_addons: [
      {
        addon_name: "Banquete Bárbaro",
        addon_description:
          "Adicione mais carne de javali ao seu hambúrguer por uma experiência verdadeiramente bárbara.",
        addon_value: 3.5,
        addon_weight: "40g",
        addon_image: "images/barbarian_feast.png",
        addon_image_alt: "Imagem de Banquete Bárbaro",
      },
      {
        addon_name: "Queijo Trovão",
        addon_description:
          "Queijo que estala e solta faíscas quando derretido.",
        addon_value: 2.2,
        addon_weight: "25g",
        addon_image: "images/thunder_cheese.png",
        addon_image_alt: "Imagem de Queijo Trovão",
      },
      {
        addon_name: "Molho do Berserker",
        addon_description:
          "Um molho ardente que desafia até os paladares mais corajosos.",
        addon_value: 2.7,
        addon_weight: "20g",
        addon_image: "images/berserker_sauce.png",
        addon_image_alt: "Imagem de Molho do Berserker",
      },
    ],
  },
  {
    product_name: "Aventura Vegana",
    product_description:
      "Hambúrguer de grãos mágicos com vegetais frescos e molho de ervas encantadas.",
    product_category: "Hambúrgueres",
    product_value: 17.0,
    product_image: "images/Vegano.jpg",
    product_image_alt: "Imagem de Aventura Vegana",
    product_addons: [
      {
        addon_name: "Pó de Fada",
        addon_description: "Toque mágico de pó de fada para realçar o sabor.",
        addon_value: 2.0,
        addon_weight: "15g",
        addon_image: "images/fairy_dust.png",
        addon_image_alt: "Imagem de Pó de Fada",
      },
      {
        addon_name: "Cogumelos Encantados",
        addon_description:
          "Cogumelos místicos para uma experiência culinária única.",
        addon_value: 2.5,
        addon_weight: "20g",
        addon_image: "images/enchanted_mushrooms.png",
        addon_image_alt: "Imagem de Cogumelos Encantados",
      },
      // Adicione mais addons se desejar
    ],
  },
  {
    product_name: "Ranger Defumado",
    product_description:
      "Hambúrguer com carne de caça defumada, queijo suave e molho de ervas do bosque.",
    product_category: "Hambúrgueres",
    product_value: 19.5,
    product_image: "images/Ranger_1.jpg",
    product_image_alt: "Imagem de Ranger Defumado",
    product_addons: [
      {
        addon_name: "Folhas de Carvalho",
        addon_description:
          "Folhas de carvalho crocantes para uma textura única.",
        addon_value: 1.8,
        addon_weight: "15g",
        addon_image: "images/oak_leaves.png",
        addon_image_alt: "Imagem de Folhas de Carvalho",
      },
      {
        addon_name: "Geleia de Frutas Silvestres",
        addon_description:
          "Geleia feita com frutas da floresta para um toque adocicado.",
        addon_value: 2.3,
        addon_weight: "20g",
        addon_image: "images/wildfruit_jam.png",
        addon_image_alt: "Imagem de Geleia de Frutas Silvestres",
      },
      // Adicione mais addons se desejar
    ],
  },
  {
    product_name: "Ranger Defumado",
    product_description:
      "Hambúrguer com carne de caça defumada, queijo suave e molho de ervas do bosque.",
    product_category: "Hambúrgueres",
    product_value: 19.5,
    product_image: "images/Ranger_2.jpg",
    product_image_alt: "Imagem de Ranger Defumado",
    product_addons: [
      {
        addon_name: "Folhas de Carvalho",
        addon_description:
          "Folhas de carvalho crocantes para uma textura única.",
        addon_value: 1.8,
        addon_weight: "15g",
        addon_image: "images/oak_leaves.png",
        addon_image_alt: "Imagem de Folhas de Carvalho",
      },
      {
        addon_name: "Geleia de Frutas Silvestres",
        addon_description:
          "Geleia feita com frutas da floresta para um toque adocicado.",
        addon_value: 2.3,
        addon_weight: "20g",
        addon_image: "images/wildfruit_jam.png",
        addon_image_alt: "Imagem de Geleia de Frutas Silvestres",
      },
      // Adicione mais addons se desejar
    ],
  },
  {
    product_name: "Sangue de Dragão",
    product_description:
      "Bebida encorpada com toques de frutas vermelhas e especiarias ardentes.",
    product_category: "Bebidas",
    product_value: 10.5,
    product_image: "images/DragonBlood.jpg",
    product_image_alt: "Imagem de Sangue de Dragão",
    product_addons: [],
  },
  {
    product_name: "Sangue de Dragão",
    product_description:
      "Bebida encorpada com toques de frutas vermelhas e especiarias ardentes.",
    product_category: "Bebidas",
    product_value: 10.5,
    product_image: "images/DragonBlood-2.jpg",
    product_image_alt: "Imagem de Sangue de Dragão",
    product_addons: [],
  },
  {
    product_name: "Poção de Vida Renovada",
    product_description:
      "Bebida refrescante com frutas da estação e toques de magia curativa.",
    product_category: "Bebidas",
    product_value: 8.0,
    product_image: "images/lifePotion.jpg",
    product_image_alt: "Imagem de Poção de Vida Renovada",
    product_addons: [],
  },
  {
    product_name: "Poção de Vida Renovada",
    product_description:
      "Bebida refrescante com frutas da estação e toques de magia curativa.",
    product_category: "Bebidas",
    product_value: 8.0,
    product_image: "images/lifePotion-2.jpg",
    product_image_alt: "Imagem de Poção de Vida Renovada",
    product_addons: [],
  },
  {
    product_name: "Elixir Arcano",
    product_description:
      "Bebida mágica que mescla sabores cítricos e ervas encantadas.",
    product_category: "Bebidas",
    product_value: 9.5,
    product_image: "images/ElixirArcano.jpg",
    product_image_alt: "Imagem de Elixir Arcano",
    product_addons: [],
  },
  {
    product_name: "Elixir Arcano",
    product_description:
      "Bebida mágica que mescla sabores cítricos e ervas encantadas.",
    product_category: "Bebidas",
    product_value: 9.5,
    product_image: "images/ElixirArcano-2.jpg",
    product_image_alt: "Imagem de Elixir Arcano",
    product_addons: [],
  },
  {
    product_name: "Potion Brew",
    product_description:
      "Bebida efervescente com misturas mágicas de frutas e ervas.",
    product_category: "Bebidas",
    product_value: 10.0,
    product_image: "images/PotionBrew-2.jpg",
    product_image_alt: "Imagem de Potion Brew",
    product_addons: [],
  },
  {
    product_name: "Potion Brew",
    product_description:
      "Bebida efervescente com misturas mágicas de frutas e ervas.",
    product_category: "Bebidas",
    product_value: 10.0,
    product_image: "images/PotionBrew-1.jpg",
    product_image_alt: "Imagem de Potion Brew",
    product_addons: [],
  },
  {
    product_name: "Potion Brew",
    product_description:
      "Bebida efervescente com misturas mágicas de frutas e ervas.",
    product_category: "Bebidas",
    product_value: 10.0,
    product_image: "images/PotionBrew-3.jpg",
    product_image_alt: "Imagem de Potion Brew",
    product_addons: [],
  },
  {
    product_name: "Cerveja do Anão Dourado",
    product_description:
      "Cerveja encorpada, feita com os melhores grãos das montanhas dos anões.",
    product_category: "Bebidas",
    product_value: 7.5,
    product_image: "images/CervejaAna.jpg",
    product_image_alt: "Imagem de Cerveja do Anão Dourado",
    product_addons: [],
  },
  {
    product_name: "Cerveja do Anão Dourado",
    product_description:
      "Cerveja encorpada, feita com os melhores grãos das montanhas dos anões.",
    product_category: "Bebidas",
    product_value: 7.5,
    product_image: "images/CervejaAna-2.jpg",
    product_image_alt: "Imagem de Cerveja do Anão Dourado",
    product_addons: [],
  },
  {
    product_name: "Cerveja do Anão Dourado",
    product_description:
      "Cerveja encorpada, feita com os melhores grãos das montanhas dos anões.",
    product_category: "Bebidas",
    product_value: 7.5,
    product_image: "images/CervejaAna-3.jpg",
    product_image_alt: "Imagem de Cerveja do Anão Dourado",
    product_addons: [],
  },
  {
    product_name: "Hidromel Élfico",
    product_description:
      "Bebida suave e adocicada, destilada nas florestas élficas.",
    product_category: "Bebidas",
    product_value: 8.5,
    product_image: "images/Hidromel.jpg",
    product_image_alt: "Imagem de Hidromel Élfico",
    product_addons: [],
  },
  {
    product_name: "Hidromel Élfico",
    product_description:
      "Bebida suave e adocicada, destilada nas florestas élficas.",
    product_category: "Bebidas",
    product_value: 8.5,
    product_image: "images/Hidromel-2.jpg",
    product_image_alt: "Imagem de Hidromel Élfico",
    product_addons: [],
  },
  {
    product_name: "Ninhada de Dragão",
    product_description:
      "Porção com bolinhos de queijo empanados, inspirados em ovos de dragão.",
    product_category: "Porções",
    product_value: 14.0,
    product_image: "images/Ninhada de Dragão.jpg",
    product_image_alt: "Imagem de Ninhada de Dragão",
    product_addons: [],
  },
  {
    product_name: "Trio de Elfos",
    product_description:
      "Porção com mini-hambúrgueres, batatas elficas e molho do bosque.",
    product_category: "Porções",
    product_value: 15.0,
    product_image: "images/TrioElfico.jpg",
    product_image_alt: "Imagem de Trio de Elfos",
    product_addons: [],
  },
  {
    product_name: "Anéis de Cebola Anã",
    product_description:
      "Porção generosa de anéis de cebola fritos, servidos com molho especial.",
    product_category: "Porções",
    product_value: 12.0,
    product_image: "images/AneisAnoies.jpg",
    product_image_alt: "Imagem de Anéis de Cebola Anã",
    product_addons: [],
  },
  {
    product_name: "Taberna Trol",
    product_description:
      "Mix de petiscos troll, incluindo carne defumada, queijo pungente e picles ardentes.",
    product_category: "Porções",
    product_value: 18.0,
    product_image: "images/tavernaTroll.jpg",
    product_image_alt: "Imagem de Taberna Trol",
    product_addons: [],
  },
  {
    product_name: "Fornalha do Dragão",
    product_description:
      "Porção de batatas fritas temperadas com especiarias dragônicas.",
    product_category: "Porções",
    product_value: 10.0,
    product_image: "images/Fries.jpg",
    product_image_alt: "Imagem de Fornalha do Dragão",
    product_addons: [],
  },
  {
    product_name: "Trilogia Mágica",
    product_description:
      "Porção com nuggets mágicos de frango, batatas encantadas e palitos de queijo elfico.",
    product_category: "Porções",
    product_value: 16.5,
    product_image: "images/MagicTrilogy.jpg",
    product_image_alt: "Imagem de Trilogia Mágica",
    product_addons: [],
  },
  {
    product_name: "Taberna Trol",
    product_description:
      "Mix de petiscos troll, incluindo carne defumada, queijo pungente e picles ardentes.",
    product_category: "Porções",
    product_value: 18.0,
    product_image: "images/Taverna-2.jpg",
    product_image_alt: "Imagem de Taberna Trol",
    product_addons: [],
  },
];
