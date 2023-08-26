'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Requisicaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      veiculo: {
        type: Sequelize.STRING
      },
      funcionario: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.DATE
      },
      tipo: {
        type: Sequelize.ENUM('particular', 'empresa'), // Ajuste os valores conforme necessário
        
      },
      valor: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Requisicaos');
  }
};