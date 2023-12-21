<script setup>
</script>

<template>
 <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
    <div class="container mx-auto p-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Début de l'équipe 1 -->
        <div class="border border-gray-300 rounded-lg p-4 shadow-md">
          <h2 class="text-xl font-bold mb-3 text-center">Équipe 1</h2>
          <div class="grid grid-cols-2 gap-4">
            <!-- Pokémon de l'équipe 1 -->
            <!-- Répétez ce bloc pour chaque Pokémon -->
            <div class="flex flex-col items-center">
              <img src="lien_vers_image_pokemon" alt="nom_pokemon" class="w-20 h-20">
              <span class="text-sm font-medium mt-2">Nom Pokémon</span>
            </div>
          </div>
        </div>
        <!-- Fin de l'équipe 1 -->
    
        <div class="border border-gray-300 rounded-lg p-4 shadow-md">
          <h2 class="text-xl font-bold mb-3 text-center">Équipe 2</h2>
          <div class="grid grid-cols-2 gap-4">
            <!-- Pokémon de l'équipe 2 -->
            <!-- Répétez ce bloc pour chaque Pokémon -->
            <div class="flex flex-col items-center">
              <img src="lien_vers_image_pokemon" alt="nom_pokemon" class="w-20 h-20">
              <span class="text-sm font-medium mt-2">Nom Pokémon</span>
            </div>
          </div>
        </div>

        <div class="border border-gray-300 rounded-lg p-4 shadow-md">
          <h2 class="text-xl font-bold mb-3 text-center">Équipe 3</h2>
          <div class="grid grid-cols-2 gap-4">
            <!-- Pokémon de l'équipe 3 -->
            <!-- Répétez ce bloc pour chaque Pokémon -->
            <div class="flex flex-col items-center">
              <img src="lien_vers_image_pokemon" alt="nom_pokemon" class="w-20 h-20">
              <span class="text-sm font-medium mt-2">Nom Pokémon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>