import PWCore from '..';
import { SerializeRawTransaction } from '@ckb-lumos/types/lib/core';
import { validators, normalizers, Reader, transformers } from 'ckb-js-toolkit';
import { Blake2bHasher } from '../hashers';
export class RawTransaction {
    constructor(inputCells, outputs, cellDeps = [
        PWCore.config.defaultLock.cellDep,
        PWCore.config.pwLock.cellDep,
    ], headerDeps = [], version = '0x0') {
        this.inputCells = inputCells;
        this.outputs = outputs;
        this.cellDeps = cellDeps;
        this.headerDeps = headerDeps;
        this.version = version;
        this.inputs = inputCells.map((i) => i.toCellInput());
        this.outputsData = this.outputs.map((o) => o.getHexData());
    }
    sameWith(raw) {
        validators.ValidateTransaction(transformers.TransformTransaction(raw));
        return raw.toHash() === this.toHash();
    }
    toHash() {
        const rawTx = transformers.TransformRawTransaction(this);
        const hasher = new Blake2bHasher();
        return hasher
            .hash(new Reader(SerializeRawTransaction(normalizers.NormalizeRawTransaction(rawTx))))
            .serializeJson();
    }
    validate() {
        validators.ValidateRawTransaction(transformers.TransformRawTransaction(this));
        return true;
    }
    serializeJson() {
        return {
            version: this.version,
            cell_deps: this.cellDeps,
            header_deps: this.headerDeps,
            inputs: this.inputs,
            outputs: this.outputs,
            outputs_data: this.outputsData,
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF3LXRyYW5zYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVscy9yYXctdHJhbnNhY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxNQUFtQyxNQUFNLElBQUksQ0FBQztBQUNyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUUzQyxNQUFNLE9BQU8sY0FBYztJQUl6QixZQUNTLFVBQWtCLEVBQ2xCLE9BQWUsRUFDZixXQUFzQjtRQUMzQixNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPO1FBQ2pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU87S0FDN0IsRUFDTSxhQUF1QixFQUFFLEVBQ2hCLFVBQWtCLEtBQUs7UUFQaEMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsYUFBUSxHQUFSLFFBQVEsQ0FHZDtRQUNNLGVBQVUsR0FBVixVQUFVLENBQWU7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFFdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ0QsUUFBUSxDQUFDLEdBQW1CO1FBQzFCLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2RSxPQUFPLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELE1BQU07UUFDSixNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsTUFBTSxNQUFNLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUNuQyxPQUFPLE1BQU07YUFDVixJQUFJLENBQ0gsSUFBSSxNQUFNLENBQ1IsdUJBQXVCLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ3BFLENBQ0Y7YUFDQSxhQUFhLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsUUFBUTtRQUNOLFVBQVUsQ0FBQyxzQkFBc0IsQ0FDL0IsWUFBWSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUMzQyxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsYUFBYTtRQUNYLE9BQU87WUFDTCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3hCLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUM1QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVztTQUMvQixDQUFDO0lBQ0osQ0FBQztDQUNGIn0=