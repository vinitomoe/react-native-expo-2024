export async function initializaDatabase(database) {
    try {
        await database.execAsync(`
           DROP TABLE IF EXISTS payments;
         
         
           DROP TABLE IF EXISTS users;


           DROP INDEX IF  EXISTS idx_users_nome;


           DROP INDEX IF  EXISTS idx_payments_data_pagamento;

         
         CREATE TABLE IF NOT EXISTS users (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         nome TEXT,
         curso TEXT,
         email TEXT NOT NULL UNIQUE,
         senha TEXT NOT NULL DEFAULT 'A123456a!',
         role TEXT NOT NULL DEFAULT 'USER',
        created_at DATE DEFAULT CURRENT_TIMESTAMP,
        update_at DATE
         );

         CREATE TABLE IF NOT EXISTS payments(
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         user_id INTEGER NOT NULL,
         user_cadastro INTEGER NOT NULL,
         valor_pago REAL NOT NULL,
         data_pagamento DATE NOT NULL,
         numero_recibo TEXT NOT NULL,
         observacao TEXT,
         created_at DATE DEfAULT CURRENT_TIMESTAMP,
         updated_at DATE,
         FOREIGN KEY (user_id) REFERENCES users(id),
         FOREIGN KEY (user_cadastro) REFERENCES user(id)

         );

         CREATE INDEX IF NOT EXISTS idx_users_users_nome ON users (nome);

         CREATE INDEX IF NOT EXISTS idx_payments_data_pagamento ON payments (data_pagamento);

         /*INSERT OR REPLACE INTO users  (nome, email, senha, role) VALUES ('Super', 'super@email.com', 'A123456a!', 'SUPER');
         INSERT OR REPLACE INTO users  (nome, email, senha, role) VALUES ('admin', 'admin@email.com', 'A123456a!', 'ADMIN');
         INSERT OR REPLACE INTO users  (nome, email, senha, role) VALUES ('User', 'user@email.com', 'A123456a!', 'USER');*/

         insert into USERS (nome, curso, email, role) values ('Kasey Hastings', 'Agropecuária', 'khastings0@bloglovin.com', 'SUPER');
insert into USERS (nome, curso, email, role) values ('Kinsley Banks', 'Administração', 'kbanks1@typepad.com', 'USER');
insert into USERS (nome, curso, email, role) values ('Win Pattrick', 'Administração', 'wpattrick2@mail.ru', 'USER');
insert into USERS (nome, curso, email, role) values ('Vere Coveny', 'Administração', 'vcoveny3@sphinn.com', 'ADMIN');
insert into USERS (nome, curso, email, role) values ('Heywood Wyldish', 'Agropecuária', 'hwyldish4@un.org', 'ADMIN');
insert into USERS (nome, curso, email, role) values ('Eugen Koppe', 'Administração', 'ekoppe5@redcross.org', 'USER');
insert into USERS (nome, curso, email, role) values ('Jillie Ternault', 'Administração', 'jternault6@reddit.com', 'ADMIN');
insert into USERS (nome, curso, email, role) values ('Thomas Brazelton', 'Informática', 'tbrazelton7@qq.com', 'SUPER');
insert into USERS (nome, curso, email, role) values ('Burton Annes', 'Agropecuária', 'bannes8@washington.edu', 'SUPER');
insert into USERS (nome, curso, email, role) values ('Bernard Christaeas', 'Informática', 'bchristaeas9@rambler.ru', 'SUPER');
insert into USERS (nome, curso, email, role) values ('Almira Westlake', 'Administração', 'awestlakea@google.com', 'SUPER');
insert into USERS (nome, curso, email, role) values ('Virge Towns', 'Agropecuária', 'vtownsb@bing.com', 'ADMIN');
insert into USERS (nome, curso, email, role) values ('Sarajane Bigrigg', 'Administração', 'sbigriggc@yolasite.com', 'SUPER');
insert into USERS (nome, curso, email, role) values ('Quill Matijasevic', 'Bio', 'qmatijasevicd@loc.gov', 'ADMIN');
insert into USERS (nome, curso, email, role) values ('Willem Eaves', 'Agropecuária', 'weavese@ftc.gov', 'ADMIN');
insert into USERS (nome, curso, email, role) values ('Billye Sirette', 'Agropecuária', 'bsirettef@barnesandnoble.com', 'USER');
insert into USERS (nome, curso, email, role) values ('Percival Tomkinson', 'Administração', 'ptomkinsong@ehow.com', 'SUPER');
insert into USERS (nome, curso, email, role) values ('Adan Eyckelbeck', 'Informática', 'aeyckelbeckh@gnu.org', 'ADMIN');
insert into USERS (nome, curso, email, role) values ('Buck Sall', 'Bio', 'bsalli@histats.com', 'USER');
insert into USERS (nome, curso, email, role) values ('Burtie Dockerty', 'Agropecuária', 'bdockertyj@free.fr', 'SUPER');
insert into USERS (nome, curso, email, role) values ('Eloise Blenkinship', 'Informática', 'eblenkinshipk@businesswire.com', 'USER');
insert into USERS (nome, curso, email, role) values ('Keely Gunter', 'Bio', 'kgunterl@imageshack.us', 'USER');
insert into USERS (nome, curso, email, role) values ('Bartolemo Lilie', 'Agropecuária', 'bliliem@gravatar.com', 'SUPER');
insert into USERS (nome, curso, email, role) values ('Christi Mival', 'Bio', 'cmivaln@statcounter.com', 'USER');
insert into USERS (nome, curso, email, role) values ('Tani Merrilees', 'Agropecuária', 'tmerrileeso@ow.ly', 'ADMIN');
      `);
    } catch (error) {
        console.log(error)
    }
} 