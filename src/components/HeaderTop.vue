<template>
  <section>
    <div className="top-bar"></div>
    <nav className="nav">
      <div className="nav__main">
        <a href="/">
          <img src="../assets/images/logo.png" alt="Logo" />
        </a>
        <h1>{{ $t('members') }}</h1>
      </div>
    </nav>
  </section>
</template>

<script setup>
import '../assets/styles/header-top.css'
</script>
