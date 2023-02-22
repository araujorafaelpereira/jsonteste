 export default[
 {
    order: {
      type: {
        label: 'Hotel',
        value: 'Hotel' //V (VOO), H (HOTEL), P(PACOTE), Não exites(O (ONIBUS), C (CARRO))
      },
      status: {
        label: 'Aguardando confirmação de pagamento',
        value: 1 // 1(AGUARDANDO), 2 (ERRO, CANCELADO), 3 (FINALIZADA),
      },
      destination: 'Salvador',
      localization: 'Salvador, Bahia, Brasil', //Opcional (Somente Hotel)
      order_identifier: 'WNX-8X0-19',
      payment_method: 'Boleto ',
      created_at: '2023-01-01',
      total_price: 1093.1,
      has_loyalt: true,
      white_label: {
        label: 'white_label',
        value: '/usuarios/img/logo-123-horizontal.webp'
      }
    },
    travelers: [
      {
        type: 'Adult',
        name: 'Cristiano Ronaldo',
        document_type: 'CPF',
        document: '123.456.789-00'
      },
      {
        type: 'Adult',
        name: 'Messi',
        document_type: 'CPF',
        document: '123.456.789-00'
      },
      {
        type: 'Children',
        name: 'Ronaldo Fenomeno',
        document_type: 'CPF',
        document: '123.456.789-00'
      },
      {
        type: 'Children',
        name: 'Ronaldinho Gaucho',
        document_type: 'CPF',
        document: '123.456.789-00'
      }
    ],
    flight: {
      status: {
        label: 'aguardando confirmação de pagamento',
        value: 1 // 1(AGUARDANDO), 2 (ERRO, CANCELADO), 3 (FINALIZADA),
      },
      outbound: {
        date: '2023-03-25 11:40:09',
        iata_origin: 'CNF',
        iata_destination: 'CGH',
        duration: '1h46',
        cia: 'GOL',
        flight_number: 'G3-5465',
        backpack: true,
        hand_luggage: true,
        luggage: 2,
        departure_date: '2023-10-01 11:45:09',
        arrival_date: '2023-10-01 13:25:09',
        airport_origin: 'Tancredo Neves',
        city_origin: 'Belo Horizonte',
        airport_destination: 'Aeroporto de Congonhas',
        city_destination: 'São Paulo',
        class_service: {
          label: '1 classe',
          value: 1
        },
        total_connections: 2,
        connections: [
          {
            cia: 'TAM',
            flight_number: 'G3-54656',
            backpack: true,
            hand_luggage: false,
            luggage: 1,
            departure_date: '2023-10-01 14:00:09',
            iata_origin: 'GRU',
            airport_origin: 'Aeroporto de Guarulhos',
            city_origin: 'São Paulo',
            arrival_date: '2023-10-01 15:50:09',
            iata_destination: 'GIG',
            airport_destination: 'Aeroporto Galeão',
            city_destination: 'Rio de Janeiro',
            duration: '1h5m',
            class_service: {
              label: 'Economica',
              value: 3
            },
            transition: {
              city: 'São Paulo',
              type: { label: 'Troca de Aeroporto', value: 2 }, // 1 - Aeronave 2 - Aeroporto},
              duration: '1h35m'
            }
          },
          {
            cia: 'TAM',
            flight_number: 'G3-54655',
            backpack: true,
            hand_luggage: false,
            luggage: 1,
            departure_date: '2023-10-01 14:00:09',
            iata_origin: 'GIG',
            airport_origin: 'Aeroporto Galeão',
            city_origin: 'Rio de Janeiro',
            arrival_date: '2023-10-01 15:50:09',
            iata_destination: 'CNF',
            airport_destination: 'Aeroporto de Salvador',
            city_destination: 'Salvador',
            duration: '1h5m',
            class_service: {
              label: 'Desconhecida',
              value: 0
            },
            transition: {
              city: 'Rio de Janeiro',
              type: { label: 'Troca de Aeronaves', value: 1 }, // 1 - Aeronave 2 - Aeroporto},
              duration: '11h35m'
            }
          }
        ]
      },
      inbound: {
        date: '2023-03-30 07:40:09',
        iata_origin: 'SSA',
        iata_destination: 'CNF',
        duration: '1h:00',
        cia: 'TAM',
        flight_number: 'voo T3-3325',
        backpack: true,
        hand_luggage: false,
        luggage: 0,
        departure_date: '2023-12-01 15:45:09',
        arrival_date: '2023-12-13 20:25:09',
        airport_origin: 'Aeroporto Salvador',
        city_origin: 'Salvador',
        airport_destination: 'Tancredo Neves',
        city_destination: 'Belo Horizonte',
        class_service: {
          label: 'Executiva',
          value: 2
        },
        connections: []
      }
    },
    hotel: {
      name: 'Gran Hotel Stella Maris Urban Resort & Conventions',
      score: 8.8,
      stars: 3,
      address: 'Av. Cristiano Machado, 4001 - Ipiranga, Belo Horizonte - MG, 31160-413',
      dailies: 4,
      checkin: {
        date: '2023-02-01',
        hour: '14h'
      },
      checkout: {
        date: '2023-02-01',
        hour: '14h'
      },
      status: {
        label: 'aguardando confirmação de pagamento',
        value: 1 // 1(AGUARDANDO), 2 (ERRO, CANCELADO), 3 (FINALIZADA),
      },
      rooms: [
        {
          type: 'Quarto Standard Solteiro',
          confirmation_number: '098769',
          regime: 'Sem café da manhã incluso',
          with_coffe: false,
          cancellation:
            'Para cancelamentos efetuados a partir do dia <b>06/10/2020</b>, será cobrada uma taxa fixa de <b>R$ 173,54</b> fasdfasdfas asdf asdf asdf asdf asdf asdf asdf ewf wf sf sdf sd asdf asdf sdf sadf asdsad fsadf asdf sadf sadf sa'
        },
        {
          type: 'Quarto Superior Casal',
          confirmation_number: '0987691465',
          regime: 'Com café da manhã',
          with_coffe: true,
          cancellation:
            'Até as 23h59 de 21/07. A partir dessa data será cobrada uma taxa de R$ 82,31 por quarto.*'
        }
      ]
    },
    promo: {
      city_origin: 'Belo Horizonte',
      total_travelers: 2,
      outbound_date: '2023-02-05',
      inbound_date: '2023-02-10', // calcular o outbound + dailies
      dailies: 5 //Em Voo somente
    },
    insurance: {
      status: {
        label: 'aguardando confirmação de pagamento',
        value: 1 // 1(AGUARDANDO), 2 (ERRO, CANCELADO), 3 (FINALIZADA),
      },
      price: 629.35,
      logo: {
        label: 'white_label',
        value: '/usuarios/img/logo-123-horizontal.webp'
      },
      policy: '/usuarios/img/logo-123-horizontal.webp'
    }
  },
  {
    order: {
      type: {
        label: 'Hotel',
        value: 'H' //V (VOO), H (HOTEL), P(PACOTE), O (ONIBUS), C (CARRO)
      },
      status: {
        label: 'Emitido',
        value: 3 // 1(AGUARDANDO), 2 (ERRO, CANCELADO), 3 (FINALIZADA),
      },
      destination: 'Gran Hotel Stella Maris Urban Resort & Conventions',
      localization: 'Salvador, Bahia, Brasil', //Opcional (Somente Hotel)
      order_identifier: 'HKL-8X0-25',
      payment_method: 'Boleto',
      created_at: '2023-01-01',
      total_price: 1093.1,
      has_loyalt: true
    },
    travelers: [
      {
        type: 'Adult',
        name: 'Cristiano Ronaldo',
        document_type: 'CPF',
        document: '123.456.789-00'
      },
      {
        type: 'Adult',
        name: 'Messi',
        document_type: 'CPF',
        document: '123.456.789-00'
      },
      {
        type: 'Children',
        name: 'Ronaldo Fenomeno',
        document_type: 'CPF',
        document: '123.456.789-00'
      },
      {
        type: 'Children',
        name: 'Ronaldinho Gaucho',
        document_type: 'CPF',
        document: '123.456.789-00'
      }
    ],
    hotel: {
      name: 'Gran Hotel Stella Maris Urban Resort & Conventions',
      score: 8.8,
      stars: 3,
      address: 'Av. Cristiano Machado, 4001 - Ipiranga, Belo Horizonte - MG, 31160-413',
      dailies: 4,
      checkin: {
        date: '2023-02-01',
        hour: '14h'
      },
      checkout: {
        date: '2023-02-01',
        hour: '14h'
      },
      status: {
        label: 'aguardando confirmação de pagamento',
        value: 1 // 1(AGUARDANDO), 2 (ERRO, CANCELADO), 3 (FINALIZADA),
      },
      rooms: [
        {
          type: 'Quarto Standard Solteiro',
          confirmation_number: '098769',
          regime: 'Sem café da manhã incluso',
          with_coffe: false,
          cancellation:
            'Para cancelamentos efetuados a partir do dia <b>06/10/2020</b>, será cobrada uma taxa fixa de <b>R$ 173,54</b> fasdfasdfas asdf asdf asdf asdf asdf asdf asdf ewf wf sf sdf sd asdf asdf sdf sadf asdsad fsadf asdf sadf sadf sa'
        },
        {
          type: 'Quarto Superior Casal',
          confirmation_number: '0987691465',
          regime: 'Com café da manhã',
          with_coffe: true,
          cancellation:
            'Até as 23h59 de 21/07. A partir dessa data será cobrada uma taxa de R$ 82,31 por quarto.*'
        }
      ]
    }
  }

 ]
