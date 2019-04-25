
json.merge!(
  entities: {
    pokemon: json.merge!(@pokemon.attributes), 
    items: json.merge!(@items.attributes)
  }
);

