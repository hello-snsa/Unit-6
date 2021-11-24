
function fun(n, v) {

    let flag = 0;
    let sum = 0;

    for (int i = 0; i < n; i++) {
        if (v.get(i) == 0)
            flag = 1;
        sum += v.get(i);
    }

    if (flag != 1)
        System.out.println("Not possible");

    else {

        Collections.sort(v, Collections.reverseOrder());


        if (v.get(0) == 0) {
            System.out.println("0");
            return 0;
        }
        else {
				int flags = 0;

				int y = (int)(sum % 3);

            if (y != 0) {

                for (int i = n - 1; i >= 0; i--) {
                    t
                    if (v.get(i) % 3 == y) {
                        v.remove(i);
                        flags = 1;
                        break;
                    }
                }

                if (flags == 0) {

                    y = 3 - y;

						int cnt = 0;
                    for (int i = n - 1; i >= 0; i--) {

                        if (v.get(i) % 3 == y) {
                            v.remove(i);
                            cnt++;

                            if (cnt >= 2)
                                break;
                        }
                    }
                }
            }
            if (v.get(0) == 0)
                System.out.println("0");


            else
                for (Integer i : v) {
                System.out.print(i);
            }
        }
    }
    return Integer.MIN_VALUE;
}


function main(args) {

    let arr = [] 1, 2, 3, 0 ];
    let n = 4;

    let v = [];

    for (let i = 0; i < n; i++)
        v.add(i, arr[i]);

    fun(n, v);
}
main();

