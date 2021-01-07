<template>
    <section id="about" class="about">
        <div class="container-fluid p-0 p-sm-5 p-lg-1">
            <div class="row">
                <div class="col-lg-5 h-100 align-items-stretch">
                    <img
                        class="img-fluid"
                        src="../assets/images/girl.jpg"
                        alt="Photo de François, le chef de l'entreprise la cuisine de François"
                    />
                </div>

                <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch mt-5 mt-lg-0">
                    <div class="content">
                        <h3>
                            Ma philosophie
                        </h3>
                        <p>
                            Animé par de fortes convictions écologiques et amateur de bonne chère, je reste très sensible à l’impact de mon
                            métier et ce, notamment vis-à-vis des déchets et du recyclage de ces derniers.
                        </p>
                        <p class="font-italic">
                            Je ne manque pas d’astuces dans ma cuisine et je tente d'aller encore plus loin pour minimiser l’impact .
                        </p>
                        <ul>
                            <li><i class="fas fa-check-circle"></i><strong>Produits 100% bio</strong></li>
                            <li><i class="fas fa-check-circle"></i><strong>Cuisine de saison</strong></li>
                            <li><i class="fas fa-check-circle"></i>Aucune vaisselle jetable en plastique ne sera utilisée.</li>
                        </ul>
                        <p>
                            je souhaite aller plus loin pour encourager un véritable élan écoresponsable dans la ville et donner l’impulsion
                            à d’autres restaurants et commerces.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/styles/scss/variables";

.about {
    background: #fffaf3;
    padding: 40px 0;
}

.about .content {
    padding: 0 80px;
}

.about .content h3 {
    font-weight: 400;
    font-size: 34px;
    color: #5f5950;
    padding-top: 20px;
}

.about .content h3::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 0%;
    width: 80%;
    height: 2px;
    background: $third-color;
    transform: translateX(-50%);
}

.about .content p {
    font-size: 15px;
    color: #848484;
}

.about .content ul {
    list-style: none;
    padding: 0;
}

.about .content ul li + li {
    margin-top: 15px;
}

.about .content ul li {
    position: relative;
    padding-left: 26px;
}

.about .content ul i {
    font-size: 20px;
    color: $third-color;
    position: absolute;
    left: 0;
    top: 2px;
}

.about .content p:last-child {
    margin-bottom: 0;
    padding-bottom: 20px;
}

.about .content p:last-child::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0%;
    width: 80%;
    height: 2px;
    background: $third-color;
    transform: translateX(-50%);
}

@media (max-width: 1024px) {
    .about .content,
    .about .accordion-list {
        padding-left: 0;
        padding-right: 0;
    }
}

@media (max-width: 992px) {
    .about {
        padding: 0 0 40px 0;
    }
    .about .content {
        padding: 30px 30px;
    }
    .about .accordion-list {
        padding-bottom: 30px;
    }
}
</style>
