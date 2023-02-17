const photoMapper = () => {
    const teamSchema = [
      {
        name: 'FRUITS VEGETABLES.jpg',
        title: 'FRUITS VEGETABLES.jpg',
        photo: 'FRUITS  VEGETABLES.jpg',
      },
      {
        name: 'MEAT SEAFOOD.jpg',
        title: 'MEAT SEAFOOD.jpg',
        photo: 'MEAT SEAFOOD.jpg',
      },
      {
        name: 'DAIRY',
        title: 'DAIRY',
        photo: 'DAIRY.jpg',
      },
      {
        name: 'FROZEN FOODS',
        title: 'FROZEN FOODS',
        photo: 'FROZEN FOODS.jpg',
      },
      {
        name: 'BREAD PASTA',
        title: 'BREAD PASTA',
        photo: 'BREAD  PASTA.jpg',
      },
      {
        name: 'SNACKS',
        title: 'SNACKS',
        photo: 'SNACKS.jpg',
      },
      {
        name: 'BREVERAGES',
        title: 'BREVERAGES',
        photo: 'BREVERAGES.jpg',
      },
      {
        name: 'CLEANING',
        title: 'CLEANING',
        photo: 'CLEANING.jpg',
      },
      {
        name: 'OTHERS',
        title: 'OTHERS',
        photo: 'OTHERS.jpg',
      },
    ];
  
    class PhotoMapper {
      constructor(schema, folder) {
        this.schema = schema;
        this.folder = folder;
      }
      getPhoto(name) {
        const photo = this.schema.find((item) => item.name === name);
        return photo ? `/images/${photo.photo}` : '';
      }
    }
  
    const mapper = new PhotoMapper(teamSchema, 'team');
    const html = teamSchema.map((item) => {
      const photo = mapper.getPhoto(item.name);
      return `<div class="swiper-slide" style="display: flex; justify-content: center; flex-direction: column; align-items: center;">
              <div class="team-member">
              <div class="team-img">
                  <img style="width: 400px; height: 450px; object-fit: cover;
                  object-position: center;
                  " src="${photo}" alt="" class="img-fluid">
              </div>
              </div>
              <div class="team-title" style="display: flex; justify-content: center; flex-direction: column; align-items: center;">
                  <h5>${item.name}</h5>
                  <span>${item.title}</span>
              </div>
          </div>`;
    });
    const $el = document.querySelector('.team-card-wrapper');
    $el.innerHTML = html;
    $el.innerHTML = $el.innerHTML.replace(/,/g, '');
  };
  
  photoMapper();