import { useSQLiteContext } from "expo-sqlite"

export function usePaymentsDatabase() {
    const database = useSQLiteContext();
    async function createPayments({
        user_id,
        user_cadastro,
        valor_pago,
        data_pagamento,
        observacao,
        numero_recibo
    }) {
        const statment = await database.prepareAsync(`
    INSERT INTO payments (user_id, user_cadastro, valor_pago, data_pagamento, observacao, numero_recibo)
     VALUES ($user_id, $user_cadastro, $valor_pago, $data_pagamento, $observacao, $numero,recibo);   
    `);

        try {
            const result = await statment.executeAsync({
                $user_id: user_id,
                $user_cadastro: user_cadastro,
                $valor_pago: valor_pago,
                $data_pagamento: data_pagamento,
                $observacao: observacao,
                $numero_recibo: numero_recibo,
            });
            const insertedID = result.lastInsertRowId.toString();
            return { insertedID }
        } catch (error) {
            console.log(error)
            throw error
        } finally {
            await statment.finalizeAsync();
        }
    }

    async function getPayments() {
    try {
        const payments = await database.getAllAsync("SELECT p.*, u.nome FROM payments p, users u WHERE u.id = p.user_id");
        return payments;
    } catch (error) {
        console.log(error);
        throw error;
        
    }
    }


    return { createPayments, getPayments };
}