<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable(); // for product name
            $table->text('description')->nullable(); // for product descriptiom
            $table->decimal('price', 8, 2)->nullable(); // for product price
            $table->integer('quantity')->nullable(); // for product quantity
            $table->string('category')->nullable(); // for product category
            $table->boolean('is_available')->default(true)->nullable(); // for product avaliale
            $table->string('image')->nullable(); // for product image
            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
