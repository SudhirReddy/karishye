module.exports = (sequelize, Sequelize) => {
  const Puja = sequelize.define("puja", {
    id: {
      type: Sequelize.NUMBER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    language: {
      type: Sequelize.STRING
    },
    region: {
      type: Sequelize.STRING
    },
    mode1: {
      type: Sequelize.STRING
    },
    mode2: {
      type: Sequelize.STRING
    },
    mode3: {
      type: Sequelize.STRING
    },
    videos: {
      type: Sequelize.STRING
    },
    images: {
      type: Sequelize.STRING
    },
    history_images: {
      type: Sequelize.STRING
    },
    history_videos: {
      type: Sequelize.STRING
    }
  }, {
    timestamps: false
  });

  return Puja;
};
