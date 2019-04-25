class Api::PokemonController < ApplicationController
  def index

    @pokemon = Pokemon.all
  end

  def show

    @pokemon = Pokemon.find(params[:id])
    @items = Item.find_by(pokemon_id: @pokemon.id)
  end
  
end
